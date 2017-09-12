import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8625Component } from './my-comp-8625.component';

describe('MyComp8625Component', () => {
  let component: MyComp8625Component;
  let fixture: ComponentFixture<MyComp8625Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8625Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8625Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
