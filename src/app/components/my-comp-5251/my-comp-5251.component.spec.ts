import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5251Component } from './my-comp-5251.component';

describe('MyComp5251Component', () => {
  let component: MyComp5251Component;
  let fixture: ComponentFixture<MyComp5251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
