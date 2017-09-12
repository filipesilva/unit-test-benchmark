import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9048Component } from './my-comp-9048.component';

describe('MyComp9048Component', () => {
  let component: MyComp9048Component;
  let fixture: ComponentFixture<MyComp9048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
