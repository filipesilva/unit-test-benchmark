import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3068Component } from './my-comp-3068.component';

describe('MyComp3068Component', () => {
  let component: MyComp3068Component;
  let fixture: ComponentFixture<MyComp3068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
