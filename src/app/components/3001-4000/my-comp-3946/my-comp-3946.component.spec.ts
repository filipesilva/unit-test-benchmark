import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3946Component } from './my-comp-3946.component';

describe('MyComp3946Component', () => {
  let component: MyComp3946Component;
  let fixture: ComponentFixture<MyComp3946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
