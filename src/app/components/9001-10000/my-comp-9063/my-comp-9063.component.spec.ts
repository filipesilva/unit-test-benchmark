import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9063Component } from './my-comp-9063.component';

describe('MyComp9063Component', () => {
  let component: MyComp9063Component;
  let fixture: ComponentFixture<MyComp9063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
