import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5451Component } from './my-comp-5451.component';

describe('MyComp5451Component', () => {
  let component: MyComp5451Component;
  let fixture: ComponentFixture<MyComp5451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
