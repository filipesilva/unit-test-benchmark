import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3972Component } from './my-comp-3972.component';

describe('MyComp3972Component', () => {
  let component: MyComp3972Component;
  let fixture: ComponentFixture<MyComp3972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
