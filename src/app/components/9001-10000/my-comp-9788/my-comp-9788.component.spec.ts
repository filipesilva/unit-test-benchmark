import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9788Component } from './my-comp-9788.component';

describe('MyComp9788Component', () => {
  let component: MyComp9788Component;
  let fixture: ComponentFixture<MyComp9788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
