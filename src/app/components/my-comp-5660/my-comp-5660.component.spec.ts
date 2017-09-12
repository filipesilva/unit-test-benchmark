import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5660Component } from './my-comp-5660.component';

describe('MyComp5660Component', () => {
  let component: MyComp5660Component;
  let fixture: ComponentFixture<MyComp5660Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5660Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
