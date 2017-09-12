import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2324Component } from './my-comp-2324.component';

describe('MyComp2324Component', () => {
  let component: MyComp2324Component;
  let fixture: ComponentFixture<MyComp2324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
