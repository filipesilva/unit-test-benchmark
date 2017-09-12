import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp159Component } from './my-comp-159.component';

describe('MyComp159Component', () => {
  let component: MyComp159Component;
  let fixture: ComponentFixture<MyComp159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
