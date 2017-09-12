import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8254Component } from './my-comp-8254.component';

describe('MyComp8254Component', () => {
  let component: MyComp8254Component;
  let fixture: ComponentFixture<MyComp8254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
