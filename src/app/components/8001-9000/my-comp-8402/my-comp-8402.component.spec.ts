import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8402Component } from './my-comp-8402.component';

describe('MyComp8402Component', () => {
  let component: MyComp8402Component;
  let fixture: ComponentFixture<MyComp8402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
