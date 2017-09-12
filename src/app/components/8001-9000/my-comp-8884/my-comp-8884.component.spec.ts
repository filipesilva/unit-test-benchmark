import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8884Component } from './my-comp-8884.component';

describe('MyComp8884Component', () => {
  let component: MyComp8884Component;
  let fixture: ComponentFixture<MyComp8884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
