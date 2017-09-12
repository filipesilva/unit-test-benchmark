import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6073Component } from './my-comp-6073.component';

describe('MyComp6073Component', () => {
  let component: MyComp6073Component;
  let fixture: ComponentFixture<MyComp6073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
