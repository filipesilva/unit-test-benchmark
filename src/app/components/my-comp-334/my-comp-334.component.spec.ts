import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp334Component } from './my-comp-334.component';

describe('MyComp334Component', () => {
  let component: MyComp334Component;
  let fixture: ComponentFixture<MyComp334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
