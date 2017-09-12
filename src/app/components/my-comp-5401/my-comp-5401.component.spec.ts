import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5401Component } from './my-comp-5401.component';

describe('MyComp5401Component', () => {
  let component: MyComp5401Component;
  let fixture: ComponentFixture<MyComp5401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
