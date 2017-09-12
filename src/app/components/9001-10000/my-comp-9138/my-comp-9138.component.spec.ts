import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9138Component } from './my-comp-9138.component';

describe('MyComp9138Component', () => {
  let component: MyComp9138Component;
  let fixture: ComponentFixture<MyComp9138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
