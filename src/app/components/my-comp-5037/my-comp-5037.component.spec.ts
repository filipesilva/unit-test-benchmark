import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5037Component } from './my-comp-5037.component';

describe('MyComp5037Component', () => {
  let component: MyComp5037Component;
  let fixture: ComponentFixture<MyComp5037Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5037Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
