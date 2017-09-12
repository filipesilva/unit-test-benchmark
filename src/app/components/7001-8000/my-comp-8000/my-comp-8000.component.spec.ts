import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8000Component } from './my-comp-8000.component';

describe('MyComp8000Component', () => {
  let component: MyComp8000Component;
  let fixture: ComponentFixture<MyComp8000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
