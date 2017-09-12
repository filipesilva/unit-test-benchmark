import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8566Component } from './my-comp-8566.component';

describe('MyComp8566Component', () => {
  let component: MyComp8566Component;
  let fixture: ComponentFixture<MyComp8566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
