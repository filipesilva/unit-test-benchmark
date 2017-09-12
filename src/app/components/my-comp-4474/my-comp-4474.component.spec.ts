import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4474Component } from './my-comp-4474.component';

describe('MyComp4474Component', () => {
  let component: MyComp4474Component;
  let fixture: ComponentFixture<MyComp4474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
