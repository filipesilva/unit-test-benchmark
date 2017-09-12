import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7935Component } from './my-comp-7935.component';

describe('MyComp7935Component', () => {
  let component: MyComp7935Component;
  let fixture: ComponentFixture<MyComp7935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
