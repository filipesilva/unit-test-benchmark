import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp251Component } from './my-comp-251.component';

describe('MyComp251Component', () => {
  let component: MyComp251Component;
  let fixture: ComponentFixture<MyComp251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
