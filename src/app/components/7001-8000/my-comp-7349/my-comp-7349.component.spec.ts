import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7349Component } from './my-comp-7349.component';

describe('MyComp7349Component', () => {
  let component: MyComp7349Component;
  let fixture: ComponentFixture<MyComp7349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
