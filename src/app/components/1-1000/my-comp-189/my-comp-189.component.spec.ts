import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp189Component } from './my-comp-189.component';

describe('MyComp189Component', () => {
  let component: MyComp189Component;
  let fixture: ComponentFixture<MyComp189Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp189Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
