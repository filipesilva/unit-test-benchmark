import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9419Component } from './my-comp-9419.component';

describe('MyComp9419Component', () => {
  let component: MyComp9419Component;
  let fixture: ComponentFixture<MyComp9419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
