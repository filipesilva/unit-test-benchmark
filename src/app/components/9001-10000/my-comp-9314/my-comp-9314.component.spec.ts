import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9314Component } from './my-comp-9314.component';

describe('MyComp9314Component', () => {
  let component: MyComp9314Component;
  let fixture: ComponentFixture<MyComp9314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
