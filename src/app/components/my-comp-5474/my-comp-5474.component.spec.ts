import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5474Component } from './my-comp-5474.component';

describe('MyComp5474Component', () => {
  let component: MyComp5474Component;
  let fixture: ComponentFixture<MyComp5474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
