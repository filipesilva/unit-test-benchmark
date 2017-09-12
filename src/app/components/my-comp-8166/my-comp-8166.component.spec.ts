import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8166Component } from './my-comp-8166.component';

describe('MyComp8166Component', () => {
  let component: MyComp8166Component;
  let fixture: ComponentFixture<MyComp8166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
