import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2918Component } from './my-comp-2918.component';

describe('MyComp2918Component', () => {
  let component: MyComp2918Component;
  let fixture: ComponentFixture<MyComp2918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
