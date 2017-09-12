import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2154Component } from './my-comp-2154.component';

describe('MyComp2154Component', () => {
  let component: MyComp2154Component;
  let fixture: ComponentFixture<MyComp2154Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2154Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
