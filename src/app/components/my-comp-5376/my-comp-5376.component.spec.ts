import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5376Component } from './my-comp-5376.component';

describe('MyComp5376Component', () => {
  let component: MyComp5376Component;
  let fixture: ComponentFixture<MyComp5376Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
