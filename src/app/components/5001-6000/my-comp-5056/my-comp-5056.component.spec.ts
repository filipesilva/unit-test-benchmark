import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5056Component } from './my-comp-5056.component';

describe('MyComp5056Component', () => {
  let component: MyComp5056Component;
  let fixture: ComponentFixture<MyComp5056Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5056Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
