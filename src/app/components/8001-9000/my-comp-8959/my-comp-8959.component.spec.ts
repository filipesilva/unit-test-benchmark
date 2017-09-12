import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8959Component } from './my-comp-8959.component';

describe('MyComp8959Component', () => {
  let component: MyComp8959Component;
  let fixture: ComponentFixture<MyComp8959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
