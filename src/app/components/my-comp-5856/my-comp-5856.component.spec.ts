import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5856Component } from './my-comp-5856.component';

describe('MyComp5856Component', () => {
  let component: MyComp5856Component;
  let fixture: ComponentFixture<MyComp5856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
