import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp501Component } from './my-comp-501.component';

describe('MyComp501Component', () => {
  let component: MyComp501Component;
  let fixture: ComponentFixture<MyComp501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
