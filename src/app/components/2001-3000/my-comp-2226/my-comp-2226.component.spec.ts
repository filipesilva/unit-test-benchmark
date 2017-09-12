import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2226Component } from './my-comp-2226.component';

describe('MyComp2226Component', () => {
  let component: MyComp2226Component;
  let fixture: ComponentFixture<MyComp2226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
