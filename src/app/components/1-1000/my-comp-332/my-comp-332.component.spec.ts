import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp332Component } from './my-comp-332.component';

describe('MyComp332Component', () => {
  let component: MyComp332Component;
  let fixture: ComponentFixture<MyComp332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
