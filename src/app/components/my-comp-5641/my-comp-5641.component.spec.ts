import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5641Component } from './my-comp-5641.component';

describe('MyComp5641Component', () => {
  let component: MyComp5641Component;
  let fixture: ComponentFixture<MyComp5641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
