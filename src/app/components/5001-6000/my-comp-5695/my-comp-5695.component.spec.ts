import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5695Component } from './my-comp-5695.component';

describe('MyComp5695Component', () => {
  let component: MyComp5695Component;
  let fixture: ComponentFixture<MyComp5695Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5695Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5695Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
