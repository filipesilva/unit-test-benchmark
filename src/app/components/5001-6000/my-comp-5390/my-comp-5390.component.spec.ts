import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5390Component } from './my-comp-5390.component';

describe('MyComp5390Component', () => {
  let component: MyComp5390Component;
  let fixture: ComponentFixture<MyComp5390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
