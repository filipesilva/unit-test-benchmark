import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5555Component } from './my-comp-5555.component';

describe('MyComp5555Component', () => {
  let component: MyComp5555Component;
  let fixture: ComponentFixture<MyComp5555Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5555Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5555Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
