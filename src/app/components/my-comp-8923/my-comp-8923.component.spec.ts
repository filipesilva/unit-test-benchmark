import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8923Component } from './my-comp-8923.component';

describe('MyComp8923Component', () => {
  let component: MyComp8923Component;
  let fixture: ComponentFixture<MyComp8923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
