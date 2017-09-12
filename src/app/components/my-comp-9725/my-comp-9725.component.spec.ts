import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9725Component } from './my-comp-9725.component';

describe('MyComp9725Component', () => {
  let component: MyComp9725Component;
  let fixture: ComponentFixture<MyComp9725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
