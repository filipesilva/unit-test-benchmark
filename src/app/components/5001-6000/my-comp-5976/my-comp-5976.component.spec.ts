import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5976Component } from './my-comp-5976.component';

describe('MyComp5976Component', () => {
  let component: MyComp5976Component;
  let fixture: ComponentFixture<MyComp5976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
