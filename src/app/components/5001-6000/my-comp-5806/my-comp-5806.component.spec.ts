import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5806Component } from './my-comp-5806.component';

describe('MyComp5806Component', () => {
  let component: MyComp5806Component;
  let fixture: ComponentFixture<MyComp5806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
