import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp518Component } from './my-comp-518.component';

describe('MyComp518Component', () => {
  let component: MyComp518Component;
  let fixture: ComponentFixture<MyComp518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
