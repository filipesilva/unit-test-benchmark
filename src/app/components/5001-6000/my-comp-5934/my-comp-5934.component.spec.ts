import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5934Component } from './my-comp-5934.component';

describe('MyComp5934Component', () => {
  let component: MyComp5934Component;
  let fixture: ComponentFixture<MyComp5934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
