import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8780Component } from './my-comp-8780.component';

describe('MyComp8780Component', () => {
  let component: MyComp8780Component;
  let fixture: ComponentFixture<MyComp8780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
