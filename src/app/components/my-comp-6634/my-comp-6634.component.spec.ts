import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6634Component } from './my-comp-6634.component';

describe('MyComp6634Component', () => {
  let component: MyComp6634Component;
  let fixture: ComponentFixture<MyComp6634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
