import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5370Component } from './my-comp-5370.component';

describe('MyComp5370Component', () => {
  let component: MyComp5370Component;
  let fixture: ComponentFixture<MyComp5370Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5370Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
