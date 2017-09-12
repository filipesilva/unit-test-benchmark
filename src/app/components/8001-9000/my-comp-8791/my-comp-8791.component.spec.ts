import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8791Component } from './my-comp-8791.component';

describe('MyComp8791Component', () => {
  let component: MyComp8791Component;
  let fixture: ComponentFixture<MyComp8791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
